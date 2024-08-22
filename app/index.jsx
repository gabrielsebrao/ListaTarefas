import React, { Pressable } from "react-native";
import { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

class Task {
  constructor(content, done, date) {
    this.content = content
    this.done = done
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
  new Task("Dar comida para o gato", false, '21/08/2024'),
  new Task("Namorar", false, '23/08/2024'),
  new Task("Fazer simulado", false, '30/08/2024'),
  new Task("Ver roupa da formatura", false, '13/10/2024')
]


const toDo = function () {
  const [_tasks, setTasks] = useState(tasks)

  const concludeTask = function ({ item }) {
    tasks[tasks.indexOf(item)].done = !tasks[tasks.indexOf(item)].done
    setTasks([...tasks])
  }

  const Item = ({ item }) => (
    <Pressable style={style.task} onPress={() => concludeTask({ item })}>
      <View style={style.item} >
        {!item.done
          ? <Text style={style.listItem}>{item.content}</Text>
          : <Text style={[style.listItem, { textDecorationLine: 'line-through', color: '#ff0000' }]}>{item.content}</Text>
        }
      </View>
    </Pressable >
  )

  return (
    <View style={style.container}>
      <View style={style.content}>
        <Text style={style.title}>To do</Text>
        <FlatList
          data={_tasks}
          renderItem={({ item }) => <Item item={item} />}
          style={style.list}
        />
      </View>

    </View>
  )
}

const style = StyleSheet.create({
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

  task: {
    backgroundColor: '#ffffff',
  },

  list: {
    height: '90%',
  }
})

export default toDo