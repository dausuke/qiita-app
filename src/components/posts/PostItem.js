import {css} from '@emotion/react';
import {Box, Text, Title} from '../atoms';

const PostItem = props => {
  const {post} = props;
  return (
    <Box style={{marginBottom: props.margin}} col>
      <Title>{post.title}</Title>
      <Box style={tagWrapper}>
        {post.tags.map((tag, index) => (
          <Box key={index} style={tagItem}>
            <Text style={tagText} fontSize={12}>
              {tag.name}
            </Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default PostItem;

const tagWrapper = css`
  margin-top: 8px;
`;

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
