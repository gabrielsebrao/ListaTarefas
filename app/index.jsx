import React, { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class Task {
  constructor(content, feito, date) {
    this.content = content
    this.feito = feito
    this.date = date
  }
}

const tasks = [
  new Task("Fazer Redação", false, '21/08/2024'),
  new Task("Lavar a louça de ontem", false, '21/08/2024'),
  new Task("Comprar leite", false, '20/08/2024'),
  new Task("Finalizar o cabelo", false, '21/08/2024'),
  new Task("Se arrumar para escola", false, '21/08/2024'),
  new Task("Estudar para banco de dados", false, '22/08/2024'),
  new Task("Beto Carreiro", false, '31/08/2024'),
  new Task("Protótipo de Aplicativo da Intelbras", false, '31/09/2024'),
  new Task("Duolingo", false, '21/08/2024'),
  new Task("Assistir vídeo de história", false, '23/08/2024'),
  new Task("Comprar garrafa de água ", false, '24/08/2024'),
  new Task("Deveres de Natureza", false, '21/08/2024'),
  new Task("Deveres de Linguagens", false, '21/08/2024'),
  new Task("", false, '15/08/2024'),
  new Task("Fazer prova de Redação", false, '15/08/2024'),
  new Task("Fazer prova de Redação", false, '15/08/2024'),
  new Task("Fazer prova de Redação", false, '15/08/2024')
]


const toDo = function () {
  const [_tarefas, setTarefas] = useState(tasks)

  const concluirTarefa = function ({ item }) {
    tasks[tasks.indexOf(item)].feito = !tasks[tasks.indexOf(item)].feito
    setTarefas([...tasks]) //Necessário pois sem isso o React ignora a alteração, já que o endereço de memória seria o mesmo. Isso faz uma cópia em outro endereço, basicamente
  }

  const Item = ({ item }) => (
    <Pressable style={styles.tarefa} onPress={() => concluirTarefa({ item })}>
      <View style={styles.item} >
        {!item.feito
          ? <Text style={styles.listItem}>{item.content}</Text>
          : <Text style={[styles.listItem, { textDecorationLine: 'line-through' }]}>{item.content}</Text>
        }
      </View>
    </Pressable >
  );

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Lista de Tarefas</Text>
        <FlatList
          data={_tarefas}
          renderItem={({ item }) => <Item item={item} />}
          style={styles.lista}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItem: {
    fontSize: 18
  },
  item: {
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,

  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    width: '80%',
    marginTop: 50,
  },
  tarefa: {
    backgroundColor: '#ffffff',
  },

  lista: {
    height: '90%',
  }
});

export default toDo