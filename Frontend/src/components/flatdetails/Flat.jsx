// import "./Flat.css";
import { useDispatch, useSelector } from "react-redux";


import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




export const Flat = () => {

    let dispatch = useDispatch();
    let allData = useSelector(state => state.data);

    console.log(allData);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);
  const [value, setValue] = useState("0");
  const [filter, setFilter] = useState("0");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value.length > 0) {
      getData();
    }
  }, [value, filter, page]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const getData = () => {


    try {
      fetch(
        `https://apartment-flat-manager.herokuapp.com/flat/${filter}/${value}/?page=${page}&size=${10}`
      ).then((d) => d.json()) 
      .then((res) => {
          console.log(res.flats);
          dispatch({type:"APARTMENT_DETAILS", payload:res.flats});
          setLimit(res.totalPage);
        });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div >
      <div >
        <h1 >Sort by Flat Number</h1>
        <div>
          <select name="" onChange={handleValue}>
            <option value="0">Flat Number</option>
            <option value="1">Lower</option>
            <option value="-1">Upper</option>
          </select>
          <div >
            <h1 >Filter by Resident Type</h1>
            <select onChange={handleFilter}>
              <option value="0">Resident Type</option>
              <option value="Owner">Owner</option>
              <option value="Tenant">Tenant</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>Block</th>
            <th>Flat Number</th>
            <th>Type</th>
            <th>No. of Residents</th>
            <th>Image</th>
          </tr>

          {allData.map((e, i) => (
            <tr  key={i}>
              <td>{e.block}</td>

              <td>{e.flat_number}</td>
              <td>{e.type}</td>
              <td>{e.residents.length}</td>
              <Link  to={`/flat/${e._id}`}>
                <td>
                  <img  src={e.image} alt="NA" />
                </td>
              </Link>
            </tr>
          ))}
        </table>
        <div>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
          <button
            disabled={page === limit}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
