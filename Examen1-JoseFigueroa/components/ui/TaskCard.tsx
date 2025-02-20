import { View, Text, StyleSheet } from 'react-native';

interface TaskProps {
  title: string;
  description: string;
}

const TaskCard = ({ title, description }: TaskProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: 'bold' },
  description: { fontSize: 14, color: 'gray' },
});

export default TaskCard;
