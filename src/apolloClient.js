import ApolloClient from 'apollo-boost';

// 요청 할 URL 정의
const client = new ApolloClient({
    uri: "https://movieql.now.sh/"
});

export default client;