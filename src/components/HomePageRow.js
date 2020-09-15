import React from 'react';
import {DataTable} from 'react-native-paper';

const HomePageRow = (props) => {
    const {title, url, author, created_at, data } = props;
    const onPressHandle = () => {
        props.navigation.navigate('PostDetail', {
            data: data
        });
    }
    return (
        <DataTable.Row onPress={onPressHandle}>
            <DataTable.Cell>{title}</DataTable.Cell>
            <DataTable.Cell>{url}</DataTable.Cell>
            <DataTable.Cell>{created_at}</DataTable.Cell>
            <DataTable.Cell>{author}</DataTable.Cell>
        </DataTable.Row>
    );
};

export default HomePageRow;
