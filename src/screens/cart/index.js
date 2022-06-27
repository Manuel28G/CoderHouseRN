import react from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { cart } from "../../data/cart";
import CartItem from "../../components";
import { styles } from "./styles";
import { style } from "../../components/cart-item/styles";

const onHandlerDeleteItem = (id) => {
  console.log(id);
};

const onHandlerConfirmCart = () => {
  console.log("Confirm Cart");
};

const renderItem = ({ item }) => {
  <CartItem item={item} onDelete={onHandlerDeleteItem} />;
};

const CartScreen = () => {
  const total = 12050;
  return (
    <View style={styles.container}>
      <View style={styles.cartList}>
        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View sytle={styles.footer}>
        <TouchableOpacity
          style={styles.buttonConfirm}
          onPress={() => onHandlerConfirmCart()}
        >
          <Text style={styles.textConfirm}>Confirm Cart</Text>
          <View styles={styles.totalContainer}>
            <Text style={styles.textConfirm}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
