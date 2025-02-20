import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Index() {
    const router = useRouter();
    const { user } = useAuth();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {

            if (user && user.email && user.email.endsWith('@gmail.com')) {
                router.replace('/(tabs)/home');
            } else {
                router.replace('/(tabs)/login');
            }
        }
    }, [isMounted, user]);

    return (
        <View>
            <Text>Usuario: {user ? user.email : 'No autenticado'}</Text>
        </View>
    );
}







