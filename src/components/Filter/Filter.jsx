import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "redux/selectors";
import { setFilter } from "../../redux/filterSlice";
import css from './Filter.module.css'

const Filter = () => {

  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(setFilter(event.target.value))
  }
  
  return <label className={css.inputLabel}> Find contacts by name
        <input 
            className={css.input}
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilter}
        />
    </label>
}

export default Filter