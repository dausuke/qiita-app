/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box} from '../components/atoms';
import {PlusIcon} from '../assets/icon';
import ColumnItem from '../components/column/ColumnItem';
import {db, auth} from '../firebase';
import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';
import {onAuthStateChanged} from 'firebase/auth';
import {mq} from '../assets/style';

const Column = () => {
  const MAX_COLUMN_COUNT = 2;
  const [columns, setColumns] = useState([]);
  const [user, setUser] = useState(null);

  const addColumn = async () => {
    try {
      if (columns.length < MAX_COLUMN_COUNT) {
        const data = {
          query: '',
          created_at: serverTimestamp(),
        };
        const columnCollectionRef = collection(
          db,
          'users',
          user.uid,
          'columns',
        );
        const colmnRef = await addDoc(columnCollectionRef, data);

        setColumns([...columns, {...data, columnId: colmnRef.id}]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeColumn = async id => {
    try {
      if (columns.length) {
        const columnCollectionRef = collection(
          db,
          'users',
          user.uid,
          'columns',
        );
        const docRef = doc(columnCollectionRef, id);
        await deleteDoc(docRef);

        const removed = columns.filter(col => col.columnId !== id);
        setColumns(removed);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = async (id, query) => {
    try {
      const columnCollectionRef = collection(db, 'users', user.uid, 'columns');
      const docRef = doc(columnCollectionRef, id);
      await updateDoc(docRef, {query});

      const newColmns = [...columns];
      const index = newColmns.findIndex(val => val.columnId === id);
      newColmns[index].query = query;
      setColumns(newColmns);
    } catch (e) {
      console.log(e);
    }
  };

  // 引数を追加
  const getColumnDocs = async userId => {
    try {
      // 引数で受け取ったuserIdをコレクションの参照に渡す
      const columnCollectionRef = collection(db, 'users', userId, 'columns');
      const q = query(columnCollectionRef, orderBy('created_at', 'asc'));
      const querySnapshot = await getDocs(q);

      const newColmns = querySnapshot.docs.map(doc => {
        const docData = doc.data();

        return {
          columnId: doc.id,
          user_id: docData.user_id,
          query: docData.query,
          created_at: docData.created_at,
        };
      });

      setColumns(newColmns);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        getColumnDocs(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Box css={contaienr}>
      <Box css={columnWrap}>
        {columns.map((val, index) => (
          <ColumnItem
            key={index}
            id={val.columnId}
            query={val.query}
            onSearch={handleSearch}
            onIconClick={removeColumn}
            maxCount={MAX_COLUMN_COUNT}
          />
        ))}
      </Box>
      {columns.length < MAX_COLUMN_COUNT && (
        <img src={PlusIcon} css={plusIcon} onClick={addColumn} alt="" />
      )}
    </Box>
  );
};

export default Column;

const contaienr = css`
  position: relative;
  align-items: flex-start;
  padding: 120px 0 40px;
`;

const columnWrap = css`
  column-gap: 32px;
  ${mq['tablet']} {
    column-gap: 16px;
  }
`;

const plusIcon = css`
  position: absolute;
  width: 40px;
  margin-top: 16px;
  right: -80px;
  ${mq['tablet']} {
    right: 0;
  }
`;
