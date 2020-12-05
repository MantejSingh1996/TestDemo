import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';


function DatePicker({ navigation }) {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false)
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button onPress={() => setShow(true)} title="Show date picker!" />
                <View style={styles.buttonContainer}  >
                    <Button color="#000000" title="Add Item" onPress={() => { navigation.navigate("AddItem") }}></Button>
                </View>
            </View>
            {show && (
                <DateTimePicker
                    value={date}
                    mode="default"
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer: {
        margin: 20
    },
});

export default DatePicker;