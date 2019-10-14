import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

export default class ChiTiet extends React.Component {
    static navigationOptions = {
        title: 'Chi tiet',
    };

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            ten: '',
            noidung: ''
        }
    }

    componentDidMount() {
        const hang = this.props.navigation.getParam('chitiet');
        this.setState({
            ten: hang.ten_hang,
            noidung: hang.noi_dung
        })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.HeaderContainer}>
                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>{this.state.ten}</Text>
                </View>

                <View style={styles.MainContainer}>
                    <ScrollView>
                        <Text style={{ fontSize: 18 }}>{this.state.noidung}</Text>
                    </ScrollView>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create(
    {
        HeaderContainer: {
            margin: 5,
            paddingTop: 10,
            flex: .5,
            justifyContent: 'center',
            alignItems: 'center',
        },

        MainContainer:
        {
            flex: 9,
            margin: 10
        }
    });