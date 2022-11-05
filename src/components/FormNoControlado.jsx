import { useRef } from "react";

const FormNoControlado = () => {
  const formulario = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = new FormData(formulario.current);
    // console.log(...datos.entries());

    const objectDatos = Object.fromEntries([...datos.entries()]);

    console.log(objectDatos);

    const { todoName, todoDescripcion } = objectDatos;

    if (!todoDescripcion.trim() || !todoName.trim()) {
      console.log("no esta vacio");
      return;
    }

    console.log("paso validaciones");
  };

  return (
    <>
      <h2>No Controlado</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Tarea #01"
        />
        <textarea
          name="todoDescripcion"
          placeholder="Ingrese descripcion"
          className="form-control mb-2"
          defaultValue="Descripcion Tarea #01"
        />
        <select
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="Pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>
    </>
  );
};

export default FormNoControlado;
