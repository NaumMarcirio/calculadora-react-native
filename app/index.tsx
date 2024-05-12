import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>("0");
  const [currentValue, setCurrentValue] = useState<string>("");
  const [previousValue, setPreviousValue] = useState<string>("");
  const [operator, setOperator] = useState<string>("");

  const handleInput = (value: string) => {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      if (operator !== "") {
        setPreviousValue(eval(`${previousValue}${operator}${currentValue}`));
      } else {
        setPreviousValue(currentValue);
      }
      setCurrentValue("");
      setOperator(value);
      setDisplay(display + value);
    } else if (value === "=") {
      if (operator !== "") {
        const result = eval(`${previousValue}${operator}${currentValue}`);
        setDisplay(parseFloat(result.toFixed(2)).toString());
        setCurrentValue(parseFloat(result.toFixed(2)).toString());
        setPreviousValue("");
        setOperator("");
      }
    } else if (value === "C") {
      setDisplay("0");
      setCurrentValue("");
      setPreviousValue("");
      setOperator("");
    } else {
      if (display === "0" || display === "Infinity") {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
      setCurrentValue(currentValue + value);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("7")}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("8")}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("9")}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOperator}
          onPress={() => handleInput("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("4")}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("5")}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("6")}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOperator}
          onPress={() => handleInput("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("1")}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("2")}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("3")}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOperator}
          onPress={() => handleInput("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("0")}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("C")}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("=")}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonOperator}
          onPress={() => handleInput("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    gap: 24,
  },
  display: {
    fontSize: 75,
    marginBottom: 20,
    textAlign: "right", // Texto alinhado à direita
  },
  row: {
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 20,
    margin: 5,
    borderRadius: 10,
    minWidth: 80,
  },
  buttonOperator: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFA500",
    padding: 20,
    margin: 5,
    borderRadius: 10,
    minWidth: 80,
  },
  buttonText: {
    fontSize: 40,
  },
});

export default Calculator;
