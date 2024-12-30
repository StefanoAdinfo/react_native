import { StyleSheet, Image, Platform } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text } from "react-native";

export default function Profile() {
  return (
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="title" style={{ color: "red" }}>
        Profile
      </ThemedText>
      <ThemedText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, rem eius
        amet sed consequatur rerum quis praesentium illum hic quam veniam
        delectus maiores et impedit velit animi consequuntur ut! Mollitia, omnis
        explicabo. Temporibus libero, doloribus natus ab quibusdam fuga
        obcaecati porro quam quis, magni deleniti cumque. Facilis repudiandae
        doloribus incidunt provident cupiditate. Animi, quo labore laudantium
        totam debitis veritatis qui facere voluptates! Porro, eum. Molestiae,
        facere delectus iste dignissimos ducimus nostrum placeat incidunt
        quisquam optio sit perferendis qui dolor, quas, sint praesentium
        consequuntur nemo. Magni amet accusantium enim modi explicabo iure
        nostrum minus nemo distinctio, repellat illo voluptatum facere
        repellendus!
      </ThemedText>
      <Text className="text-red-500">Ciao</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    margin: 5,
    gap: 8,
    marginBottom: 8,
  },
});
