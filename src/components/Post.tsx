import styled from 'styled-components/native';

const PostItem = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(75, 75, 75, 0.1);
`;

const PostImage = styled.Image`
  width: 150px;
  height: 100px;
  border-radius: 10px;
  margin-right: 10px;
`;

const PostTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const PostDetails = styled.View`
  flex: 1;
`;

// @ts-ignore
export const Post = ({title, imageUrl, createdAt}) => {
    return (<PostItem>
        <PostImage
            source={{uri: imageUrl}}/>
        <PostDetails>
            <PostTitle>{title}</PostTitle>
            <PostDate>{createdAt}</PostDate>
        </PostDetails>
    </PostItem>)
}
