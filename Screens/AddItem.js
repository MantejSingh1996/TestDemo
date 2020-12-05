import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Button, TextInput, FlatList } from "react-native";
import car_visit from '../cars_visit.json'


function AddItem() {
    const [data, setData] = useState(["apple", "banana", "mango"])
    const [text, setText] = useState()


    const joinData = () => {
        const val = [...data, text]
        setData(val.sort());
    }



    return (
        <View>
            <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="add item"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={data => setText(data)} />
            <TouchableOpacity onPress={() => { joinData(), setText() }} activeOpacity={0.7} style={styles.button} >

                <Text style={{ textAlign: "center" }}> Add Values To FlatList </Text>

            </TouchableOpacity>
            <FlatList
                data={data}
                extraData={data}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => {
                    return index.toString();
                }} renderItem={({ item, index }) =>
                    (<View style={styles.container}>
                        <Text style={styles.item} >{item}
                        </Text>

                    </View>)

                }

            />

        </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#6e3b6e",

    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 25,
        borderRadius: 20,
        borderWidth: 3,
        color: "#fff",
        borderColor: "#fff"


    },
    buttonContainer: {
        margin: 20
    },

    input: {
        margin: 5,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    button: {
        width: '90%',
        height: 40,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        margin: 5,
        alignSelf: "center"
    },
});


export default AddItem