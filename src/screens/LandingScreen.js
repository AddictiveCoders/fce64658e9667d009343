/**
 * @developer :- Gaurav Addictive coders
 * @description :- landing screen
 * @date: 15 sept 2020
 * @company :- Addictive Coders
 */

import React from 'react';
import {SafeAreaView, StatusBar, ScrollView, RefreshControl} from "react-native";
import {Api} from "../services/service";
import {DataTable} from "react-native-paper";
import HomePageRow from "../components/HomePageRow";
const api = new Api();


export default class LandingScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 0,
            post: [],
            showPost: [],
            loader: false,
            page: 0
        };
        this.getPost();
        setInterval(this.getPost, 10000);
    }
        /***
         * function to get the post
         */
        getPost = () => {
            this.setState({
                loader: true,
            });
            const param = 'https://hn.algolia.com/api/v1/search_by_date?tags=story&page=' + this.state.pageCount;
            api.getApi(param).then(res => {
                this.setState({
                    loader: false,
                });
                if (res.status === 200) {
                    res.json().then(response => {
                        this.setState({
                                post: this.state.post.concat(response.hits)
                            });
                        if (this.state.pageCount === 0) {
                            this.changePage(0);
                        }
                    }).catch(error => {
                        alert('cannot fetch data');
                    });
                } else {
                    alert('cannot fetch data, code : ' , res.status);
                }
            }).catch(error => {
                this.setState({
                    loader: false,
                });
                alert('Network Request failed');
            })
            this.setState({
                pageCount: this.state.pageCount + 1
            });
        }
        changePage = page => {
                const temp = [];
                for (let i = page * 10 ; i < (page * 10) + 10; i++) {
                    temp.push(this.state.post[i]);
                }
                this.setState({
                    showPost: temp
                });
        }
        render() {
            return (
                <SafeAreaView>
                    <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
                    <ScrollView refreshControl={
                        <RefreshControl refreshing={this.state.loader} onRefresh={() => {}} />
                    }>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Title</DataTable.Title>
                                <DataTable.Title>Url</DataTable.Title>
                                <DataTable.Title>Created_at</DataTable.Title>
                                <DataTable.Title>Author</DataTable.Title>
                            </DataTable.Header>
                            {
                                this.state.showPost.map((item, index) => (
                                    <HomePageRow navigation={this.props.navigation} data={item} key={index} title={item.title} url={item.url} author={item.author} created_at={item.created_at} />
                                ))
                            }
                            <DataTable.Pagination
                                page={this.state.page}
                                numberOfPages={(this.state.pageCount * 2) / 10}
                                onPageChange={page => {
                                    if (page <= ((this.state.pageCount * 2) + 1)) {
                                        this.changePage(page);
                                        this.setState({
                                            page: page
                                        });
                                    }
                                }}
                                label={`showing from ${(this.state.page * 10) + 1} to ${(this.state.page + 1) * 10} from ${this.state.post.length}`}
                            />
                        </DataTable>
                    </ScrollView>
                </SafeAreaView>
            );
        }
}
