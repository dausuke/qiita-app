import {css} from '@emotion/react';
import {Box, Text} from '../atoms';

const Tag = ({tag}) => {
  return (
    <Box style={tagItem}>
      <Text style={tagText} fontSize={12}>
        {tag.name}
      </Text>
    </Box>
  );
};

export default Tag;

const tagItem = css`
  background-color: #bbbabd;
  padding: 4px 8px;
  margin-left: 8px;
  border-radius: 6px;
`;

const tagText = css`
  font-weight: 700;
  color: #fff;
`;