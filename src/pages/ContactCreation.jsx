import useGlobalReducer from "../hooks/useGlobalReducer";
import { CreateContact } from "../components/CreateContact";


export const ContactCreation = () => {
const { store, dispatch } = useGlobalReducer();

return (
    <div>
    <CreateContact/>
    </div>
)

}