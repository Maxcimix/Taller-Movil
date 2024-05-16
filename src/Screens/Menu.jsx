import React, { useContext, useEffect, Fragment } from "react";
import { useNavigation } from '@react-navigation/native';
import { NativeBaseProvider, View, Avatar, ScrollView, List, Text } from "native-base";
import FirebaseContext from "../../context/firebase/firebaseContext";
import VentabaseContext from "../../context/ventas/ventaContext";
import globalStyles from "../../styles/global";

const Menu = () => {
    // Contextos
    const { men, obtenerProductos } = useContext(FirebaseContext);
    const { seleccionarPedido } = useContext(VentabaseContext);
    
    //Hook para redireccionar
    const navigation = useNavigation();
    
    // Obtener productos al cargar el componente
    useEffect(() => {
        obtenerProductos();
    }, []);

    // Función para mostrar los elementos de la lista
    const mostrarLista = () => {
        if (men.length === 0) {
            return (
                <View style={styles.noItemsContainer}>
                    <Text>No hay productos disponibles.</Text>
                </View>
            );
        }

        return men.map((producto, i) => {
            const { brand, detail, image, price, id } = producto;
            
          //Diseño avatar
            return (
                <Fragment key={id}>
                    <View style={styles.carContainer}>
                        <Avatar size={170} source={{ uri: image }} />
                        <View style={styles.carInfo}>
                            <Text style={styles.brand}>{brand}</Text>
                            <Text style={styles.detail}>{detail}</Text>
                            <Text style={styles.price}>Precio: ${price}</Text>
                        </View>
                    </View>
                </Fragment>
            );
        });
    };

    return (
        <NativeBaseProvider style={globalStyles.contenedor}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    {mostrarLista()}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    );
};

const styles = {
    scrollView: {
        backgroundColor: '#FFF'
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    carContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 10
    },
    carInfo: {
        marginLeft: 20
    },
    brand: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    detail: {
        fontSize: 16,
        marginTop: 5
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        color: 'green'
    },
    noItemsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
};

export default Menu;