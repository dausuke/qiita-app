/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react';
import {css} from '@emotion/react';
import {Box} from '../components/atoms';
import PlusIcon from '../assets/icon/plus.svg';
import ColumnItem from '../components/column/ColumnItem';
import {columnColRef} from '../firebase';
import {doc, addDoc, deleteDoc, updateDoc, getDocs} from 'firebase/firestore';

const Column = () => {
  const MAX_COLUMN_COUNT = 3;
  const [columns, setColumns] = useState([]);

  const addColumn = async () => {
    try {
      if (columns.length < MAX_COLUMN_COUNT) {
        const colmnRef = await addDoc(columnColRef, {
          query: '',
        });

        setColumns([...columns, {columnId: colmnRef.id, query: ''}]);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeColumn = async id => {
    try {
      if (columns.length) {
        const docRef = doc(columnColRef, id);
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
      const docRef = doc(columnColRef, id);
      await updateDoc(docRef, {query});

      const newColmns = [...columns];
      const index = newColmns.findIndex(val => val.columnId === id);
      newColmns[index].query = query;
      setColumns(newColmns);
    } catch (e) {
      console.log(e);
    }
  };

  const getColumnDocs = async () => {
    try {
      const querySnapshot = await getDocs(columnColRef);
      const newColmns = querySnapshot.docs.map(doc => {
        return {columnId: doc.id, query: doc.data().query};
      });

      setColumns(newColmns);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getColumnDocs()
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
`;

const plusIcon = css`
  position: absolute;
  margin-top: 16px;
  right: -80px;
`;
