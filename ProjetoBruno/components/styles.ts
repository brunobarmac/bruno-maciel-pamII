import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f0f2f5",
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 5,
    color: "#333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
    textAlign: "center",
  },
  conteiner: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  conteinerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#444",
    textAlign: "center",
  },
  image: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
    linkSpotify: {
    color: '#1DB954',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  lyrics: {
    fontSize: 16,
    lineHeight: 24, // Dá um respiro entre as linhas da música
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  tableContainer: {
    width: '100%',
    marginBottom: 40,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 10,
  },
  tableInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 200,
    textAlign: 'center',
  },
    buttonAvaliacao: {
    backgroundColor: "#ff3300",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
});
