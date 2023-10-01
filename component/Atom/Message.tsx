import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface proptype{
    text:string,
}

const Message = ({text}:proptype) => {
    return(
        <Text>{text}</Text>
    )
}

export default Message;