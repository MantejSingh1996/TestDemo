import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView,  StyleSheet, Text, View, Button } from "react-native";
import car_visit from '../cars_visit.json'


function Home({ navigation }) {
    const [data, setData] = useState(car_visit)

    const sortDates = () => {
        const dataCopy = Object.assign({}, data)
        const sortedActivities = dataCopy.response?.sort((a, b) => { return Math.abs(new Date(a.visit) - new Date(b.visit)) })
        setData(sortedActivities)
    }
    useEffect(() => {
        sortDates()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button color="#000000"
                    title={"Date picker"}
                    onPress={() => { navigation.navigate("DatePicker") }}>
                </Button>
            </View>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => {
                    return index.toString();
                }} renderItem={({ item, index }) =>
                    (<View style={styles.container}>
                        <Text style={styles.item} >{item.car}{`\n`}{item.visit.split('T')[0]}
                        </Text>

                    </View>)

                }

            />


        </SafeAreaView>
    );
};

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
});

export default Home;