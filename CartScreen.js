
import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { useMyContext } from './MyContext'; // Certifique-se de substituir 'seuArquivo' pelo caminho correto
const CartScreen = () => {
    const { cart, removeFromCart, addToCart, delToCart } = useMyContext();
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const getProductQuantity = (productId) => {
        const cartItem = cart.find((item) => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
    };

    const renderCartItem = ({ item }) => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
                <Text>{item.name} - ${item.price}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        removeFromCart(item.id);
                    }}
                    style={{ padding: 10 }}
                >
                    <Image
                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828843.png' }}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
              
                <Text style={{ marginLeft: 10 }}>Quantidade: {item.quantity}</Text>
              <TouchableOpacity
                    onPress={() => {
                        addToCart({ ...item, quantity: selectedQuantity });
                    }}
                    style={{ padding: 10 }}
                >
                    <Image
                        source={{ uri: 'https://www.clker.com/cliparts/s/7/R/k/j/Z/icon-add.svg.hi.png' }}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        delToCart({ ...item, quantity: selectedQuantity });
                    }}
                    style={{ padding: 10 }}
                >
                    <Image
                        source={{ uri: 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/subtract-circle-red-512.png' }}
                        style={{ width: 20, height: 20 }}
                    />
                </TouchableOpacity>
                </View>
        </View>
    );
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Carrinho de Compras</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderCartItem}
            />
        </View>
    );
};
export default CartScreen;