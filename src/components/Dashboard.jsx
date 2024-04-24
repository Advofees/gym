import React, { useContext, useEffect, useState } from "react";
import { axiosDelete, axiosGet, axiosPatch, axiosPost } from "../lib/axiosLib";
import { AppContext } from "../context/AppContext";
import { MdOutlineDateRange, MdEditNote, MdAddToPhotos } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

// const api = "http://ec2-3-250-189-231.eu-west-1.compute.amazonaws.com:8080";
const api = "http://localhost:8080";

function Dashboard() {
  const { snackNotifier } = useContext(AppContext);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState("");
  const [formData, setFormData] = useState({
    exercise: "",
    weight: 0,
  });

  useEffect(() => {
    axiosGet(`${api}/gym/records`)
      .then((res) => {
        setRecords(res.data);
      })
      .catch((err) => {});
  }, []);

  const handleCreate = (payload) => {
    setLoading(true);
    axiosPost(`${api}/gym/records`, payload)
      .then((response) => {
        setLoading(false);
        snackNotifier("Record created succesfully.", "success", "top-center");
        setRecords([...records, response.data]);
      })
      .catch((axiosError) => {
        setLoading(false);
        snackNotifier(axiosError.message, "error", "top-center");
      });
  };

  const handleDelete = (recordId) => {
    setLoading(true);
    axiosDelete(`${api}/gym/records/${recordId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        setLoading(false);
        snackNotifier("Record deleted.", "success", "top-center");
        setRecords(records.filter((record) => record.id !== recordId));
      })
      .catch((axiosError) => {
        setLoading(false);
        snackNotifier(axiosError.message, "error", "top-center");
      });
  };

  return (
    <div className="container relative mx-auto p-4">
      {loading && (
        <div className="flex items-center justify-center fixed bg-white/10 backdrop-blur inset-0">
          <div className="h-12 w-12 border-l-4 border-r-4 rounded-full animate-spin border-[#3E3310]"></div>
        </div>
      )}
      <div>
        <h3 className="text-[#634e0b] text-[2em] font-bold mb-4">Records</h3>

        <div className="grid gap-2">
          {records.map((record, idx) => (
            <div className="shadow bg-white px-4 py-4 cursor-pointer" key={idx}>
              <div className="grid grid-cols-2 text-gray-600">
                <span>Exercise</span>
                <span>Weight</span>
              </div>
              <div className="grid grid-cols-2 pb-2">
                <span>{record.exercise}</span>
                <span>{record.weight}</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t">
                <MdOutlineDateRange />{" "}
                <span>{new Date(record.date).toDateString()}</span>
                <div className="flex flex-grow justify-end items-center gap-4">
                  <div className="group relative flex justify-center items-center">
                    {editing === `editing#${record.id}` && (
                      <div className="absolute top-0 right-0">
                        <EditRecord
                          setLoading={setLoading}
                          newRecord={(recordNew) => {
                            setRecords(
                              records.map((r) =>
                                r.id === recordNew?.id ? recordNew : r
                              )
                            );
                          }}
                          setEditing={setEditing}
                          record={record}
                        />
                      </div>
                    )}
                    <button
                      title="Edit Record"
                      className="text-[#634e0b] text-xl hover:text-green-600 duration-300"
                      onClick={() => {
                        setEditing(`editing#${record.id}`);
                      }}
                    >
                      <MdEditNote />
                    </button>
                  </div>
                  <button
                    title="Delete Record"
                    className="text-[#634e0b] text-xl hover:text-red-600 duration-300"
                    onClick={() => handleDelete(record.id)}
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="my-4">
          <form
            className="group w-max grid gap-4 bg-white p-4 shadow"
            onSubmit={(e) => {
              e.preventDefault();

              if (formData.exercise && formData.weight) {
                handleCreate(formData);
                setFormData({
                  exercise: "",
                  weight: 0,
                });
              }
            }}
          >
            <div className="duration-300">
              <h3>New Record</h3>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Exercise
              </label>
              <input
                required
                className="shadow w-96 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="exercise"
                value={formData.exercise}
                onChange={(e) =>
                  setFormData({ ...formData, exercise: e.target.value })
                }
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Weight
              </label>
              <input
                required
                className="shadow w-96 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="weight"
                value={formData.weight}
                onChange={(e) =>
                  setFormData({ ...formData, weight: e.target.value })
                }
                min="0"
              />
            </div>
            <button
              className="flex items-center gap-2 btnPrimary2"
              type="submit"
            >
              <MdAddToPhotos /> Add Record
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function EditRecord({ newRecord, setEditing, record, setLoading }) {
  const [formData, setFormData] = useState(record);
  const { snackNotifier } = useContext(AppContext);
  const handleUpdate = () => {
    setLoading(true);
    axiosPatch(`${api}/gym/records/${record.id}`, formData)
      .then((response) => {
        setLoading(false);
        setEditing("")
        snackNotifier("Record succesfully updated.", "success", "top-center");
        newRecord(response.data);
      })
      .catch((axiosError) => {
        setLoading(false);
        snackNotifier(axiosError.message, "error", "top-center");
      });
  };

  useEffect(() => {
    setFormData(record);
  }, [record]);

  return (
    <form
      className="group w-max grid gap-4 bg-white p-4 shadow-md shadow-black"
      onSubmit={(e) => {
        e.preventDefault();

        if (formData.exercise && formData.weight) {
          handleUpdate(formData);
        }
      }}
    >
      <div className="duration-300">
        <h3>Update Record</h3>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Exercise
        </label>
        <input
          required
          className="shadow w-96 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="exercise"
          value={formData.exercise}
          onChange={(e) =>
            setFormData({ ...formData, exercise: e.target.value })
          }
        />
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Weight
        </label>
        <input
          required
          className="shadow w-96 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          name="weight"
          value={formData.weight}
          onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
          min="0"
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setEditing("")}
          className="flex items-center gap-2 btnPrimary2 text-center"
          type="button"
        >
          Cancel
        </button>
        <button
          className="flex items-center gap-2 btnPrimary2 text-center"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Dashboard;
