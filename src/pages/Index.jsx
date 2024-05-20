import React, { useState } from 'react';
import { Container, Text, VStack, Input, Button, Box, Checkbox, HStack, Spacer, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleCompletion = (index) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">Todo App</Text>
        <HStack width="100%">
          <Input 
            placeholder="Enter a new task..." 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <Button colorScheme="blue" onClick={addTask}>Add Task</Button>
        </HStack>
        <VStack spacing={2} width="100%">
          {tasks.map((t, index) => (
            <Box 
              key={index} 
              width="100%" 
              p={4} 
              display="flex" 
              alignItems="center" 
              bg={t.completed ? "green.100" : "gray.100"} 
              borderRadius="md"
            >
              <Checkbox 
                isChecked={t.completed}
                onChange={() => toggleCompletion(index)}
              >
                {t.text}
              </Checkbox>
              <Spacer />
              <IconButton 
                icon={<FaTrash />} 
                colorScheme="red" 
                onClick={() => deleteTask(index)}
              />
            </Box>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;