import React, { useState } from "react";

const Formulario = () => {
  const [todo, setTodo] = useState({
    todoName: "",
    todoDescripcion: "",
    todoEstado: "pendiente",
    todoCheck: false,
  });

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { todoName, todoDescripcion } = todo;

    if (!todoName.trim() || !todoDescripcion.trim()) {
      setError(true);
      return;
    }
    setError(false);

    console.log(todo);

    setTodo({
      todoName: "",
      todoDescripcion: "",
      todoEstado: "pendiente",
      todoCheck: false,
    });
  };

  const handleChange = (e) => {
    console.log(e.target.type);

    const { name, value, checked, type } = e.target;
    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const PintarError = () => (
    <div className="alert alert-danger">Campos Obligatorios</div>
  );

  return (
    <>
      <h2>Formulario Controlado</h2>

      {error ? <PintarError /> : null}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoName}
        />
        <textarea
          name="todoDescripcion"
          placeholder="Ingrese descripcion"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoDescripcion}
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          onChange={handleChange}
          value={todo.todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="todoCheck"
            checked={todo.todoCheck}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
