import Caixa from "../component/Caixa";
import MenuCaixa from "../component/MenuCx";
import Pagamento from "../component/Pagamento";
import Login from "../component/Login";

export default function caixaPage(){
    return(
        <>
            <MenuCaixa/>
            <Pagamento/>
            <Login/>
            <Caixa/>
        </>
    );
}