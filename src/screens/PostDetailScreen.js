/**
 * @developer :- Gaurav Addictive coders
 * @description :- post detail screen
 * @date: 15 sept 2020
 * @company :- Addictive Coders
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from "react-native-paper";

const PostDetailScreen = (props) => {
    return (
        <SafeAreaView>
            <Text>
                {
                    JSON.stringify(props.route.params.data)
                }
            </Text>
        </SafeAreaView>
    );
};

export default PostDetailScreen;
