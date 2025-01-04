import React, { useEffect, useState } from 'react'

const TasksPage = () => {

    const [intput, setInput] = useState();
    const [taksList, setTasksList] = useState();
    const [isUpdate, setIsUpdate] = useState();
    const [isError, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        setInput(prev => prev + e.target.value);
    }

    const fetchTasks = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/tasks", {
                method: "GET"
            });
            if (!response.ok) {
                setError(response.body.message || "something went wrong");
            }

            const json = await response.json();
            setTasksList(json);
            console.log(json)
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }

        setIsLoading(false);
    }

    const addTask = async (e) => {
        try {
            const response = await fetch("http://localhost:4000/api/tasks", {
                method: "POST",
                body: {
                    task: e.target.value
                }
            });
            if (!response.ok) {
                setError(response.body.message || "something went wrong");
            }

            const json = await response.json();
            setTasksList(json);
            console.log(json)
        } catch (error) {
            setError(error);
        }
    }

    const editTask = async (e, id) => {
        try {
            const response = await fetch("http://localhost:4000/api/tasks", {
                method: "Put",
                body: {
                    id: id,
                    task: e.target.value
                }
            });
            if (!response.ok) {
                setError(response.body.message || "something went wrong");
            }

            const json = await response.json();
            setTasksList(response.body);
            console.log(taksList)
        } catch (error) {
            setError(error);
        }
    }

    const deleteTask = async (id) => {
        try {
            const response = await fetch("http://localhost:4000/api/tasks", {
                method: "DELETE",
                body: {
                    id: id,
                }
            });
            if (!response.ok) {
                setError(response.body.message || "something went wrong");
            }

            const json = await response.json();
            setTasksList(response.body);
            console.log(taksList)
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        setIsLoading(true);
        fetchTasks();
    }, [isUpdate]);

    return (
        <>
            <div className="tasks-wrapper">
                <div className="form">
                    <form>
                        <div className="flex flex-row gap-4">
                            <div className="input ">
                                <input type="text" onChange={handleInput} className='outline-none rounded-sm h-8 w-[15rem] p-2' placeholder='task' />
                            </div>
                            <div className="submit">
                                <button type="submit" onClick={addTask} >create</button>
                            </div>
                        </div>
                    </form>
                </div>
                {
                    isLoading ? <p>Loading...</p> : <div className="takslist mt-10">
                        {
                            taksList != null ? (taksList.data || []).map((task, i) => {
                                return (
                                    <div className='flex flex-row gap-8'>
                                        <div>
                                            <span>{i + 1} </span>
                                            <span>{task.task}</span>
                                        </div>
                                        <div>
                                            <button>update</button>
                                            <button onClick={deleteTask(i)} >delete</button>
                                        </div>
                                    </div>
                                )
                            }) : <p>No tasks</p>
                        }
                    </div>
                }
            </div>
        </>
    )
}

export default TasksPage