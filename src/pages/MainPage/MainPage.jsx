import ProductsListing from "../../components/ProductListing/ProductsListing";

import styles from "./MainPage.css";
import {useNavigate} from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrap}>
            <header style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}><img
                style={{height: '100px', width: '100px'}}
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s'/>
                <div style={{display: "flex", gap: '20px'}}>
                    <div onClick={() => navigate("/")} style={{padding: '5px',
                        borderRadius: '4px',
                        background: '#4CAF50'}}>Home</div>
                    <div onClick={() => navigate("/about")} style={{padding: '5px',
                        borderRadius: '4px',
                        background: '#4CAF50'}}>About</div>
                    <div onClick={() => navigate("/services")} style={{padding: '5px',
                        borderRadius: '4px',
                        background: '#4CAF50'}}>Services</div>
                    <div onClick={() => navigate("/products")} style={{padding: '5px',
                        borderRadius: '4px',
                        background: '#4CAF50'}}>Products</div>
                </div>
            </header>
            <div className={styles.filters}>
                {/*<SearchBar/>*/}
                {/*<FilterOptions onCategoryChange={handleCategoryChange}/>*/}
                {/*<SortOptions onSortOrderChange={handleSortOrderChange}/>*/}
            </div>

            <ProductsListing/>
            <footer style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <a href="//finance.i.ua/" target="_blank"><img src="//f.i.ua/fp2_b15_c0_l0.png" border="0"
                                                               alt="Курс доллара"/></a>
                <div style={{display: "flex", gap: '20px'}}>
                    <div>Home</div>
                    <div>About</div>
                    <div>Services</div>
                    <div>Products</div>
                    <div>Help</div>
                </div>
            </footer>
        </div>
    );
};

export default MainPage;
