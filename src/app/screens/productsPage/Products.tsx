import React, { useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";


/** REDUX SLICE & SELECTOR   */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),

});
const productsRetriever = createSelector(
  retrieveProducts,
  (products) => ({products})
);

export default function Products() {

    const { setProducts } = actionDispatch(useDispatch());
     const {products} = useSelector(productsRetriever);


    useEffect(() => {
      const product = new ProductService();
      product.getProducts({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
      }).then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }, [])

    return (
        <div className={"products"}>
            <Container>
                <Stack flexDirection="column" alignItems="center">

                    <Stack className={"rest-sarlavxa-bolim"}>

                        <Box className={"burak-sarlavxa"}>
                            Burak Restaurant
                        </Box>

                        <Box sx={{ position: "relative", display: "flex", }}
                        className={"inputt"}>
                            <input
                                type="text"
                                placeholder="Type here"
                                style={{
                                    width: "333px",
                                    height: "36px",
                                    padding: "0 40px 0 12px",
                                    borderRadius: "17px",
                                    border: "1px solid #ccc",
                                    outline: "none",
                                    fontSize: "14px",
                                    
                                }}
                            />

                            <Button color={"primary"} variant={"contained"}
                                style={{
                                    position: "absolute",
                                    right: "0",
                                    top: "0",
                                    height: "height: 36px,",
                                    width: "99px",
                                    border: "none",
                                    borderRadius: "17px",
                                    
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "6px",
                                    fontWeight: "bold",
                                    fontSize: "14px",
                                }}
                            >
                                SEARCH
                                <SearchIcon sx={{ fontSize: "20px" }} />
                            </Button>
                        </Box>

                    </Stack>


                    <Stack className={"right-top-btn"}>
                        <Stack className={"btn-group"}>
                            <Button
                         variant={"contained"}
                          color={"primary"}
                          className={"btn-left"}>
                          New
                        </Button>
                        <Button
                         variant={"contained"}
                          color={"secondary"}
                          className={"btn-left"}>
                          Price
                        </Button>
                        <Button
                         variant={"contained"}
                          color={"secondary"}
                          className={"btn-left"}>
                          Wiews
                        </Button>

                        </Stack>
                    </Stack>

 
                    <Stack className={"cards-frame"}>

                        <Stack className={"cards-btn"}>
                            <div className={"card-left-btn"}>
                                <Button variant={"contained"} color={"primary"}>
                                     DISH
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                     SALAD
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                     DRINK
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                     DESERT
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                     OTHER
                                </Button>
                            </div>
                        </Stack>

                        <Stack className={"product-wrapper"}>
                            {products.length !== 0 ? (
                                products.map((product: Product) => {
                                    const imagePath = `${serverApi}/${product.productImages[0]}`;
                                    const sizeVolume = 
                                    product.productCollection === ProductCollection.DRINK
                                    ? product.productCollection + " litre"
                                    : product.productSize + " size";
                                    return (
                                        <Stack key={product._id} className={"product-card"}>
                                            <Stack 
                                            className={"product-img"}
                                            sx={{ backgroundImage: `url(${imagePath})`,  }}
                                            >
                                            
                                            <div className={"product-sale"}>{sizeVolume}</div>
                                            <Button>
                                                <img 
                                                className="shopping-icon"
                                                src={"/icons/shopping-cart.svg"} 
                                                style={{ display: "flex"}} 
                                                />
                                            </Button>
                                            <Button className={"view-btn"} sx={{right: "36px"}}>
                                                <Badge badgeContent={product.productViews} color="secondary">
                                                    <RemoveRedEyeIcon
                                                    sx={{color: 
                                                        product.productViews === 0 ? "gray" : "white", }}
                                                      />
                                                </Badge>
                                                
                                            </Button>

                                            </Stack> 
                                            <Box className={"product-narx"}>
                                                <span className={"product-title"}>
                                                    {product.productName}
                                                </span>

                                               <div className={"product-www"}>
                                                    <MonetizationOnIcon />
                                                        {product.productPrice}
                                                </div>

                                                

                                               
                                            </Box>

                                        </Stack>
                                    );
                                })
                            ) : (
                                <Box className="no-data">Product are not available</Box>
                            )}
                        </Stack>

                    </Stack>


                    <Stack className={"pagination-section"}>
                        <Pagination 
                        count={3}
                        page={1}
                        renderItem={(item) => (
                            <PaginationItem
                            components={{
                                previous: ArrowBackIcon,
                                next: ArrowForwardIcon,
                            }}
                            {...item}
                            color={"secondary"}
                             />
                        )}
                        />
                    </Stack>
                </Stack>
            </Container>

             <div className={"brand-logo"}>
                <Box className={"logo-text"}> Our Family Brands</Box>
                <Stack className={"burak-foto"}>
                    <Box className={"burak-box"}><img src={"/img/gurme.webp"} alt="Safood Logo" /></Box>
                    <Box className={"burak-box"}><img src={"/img/seafood.webp"} alt="Safood Logo" /></Box>
                    <Box className={"burak-box"}><img src={"/img/sweets.webp"} alt="Safood Logo" /></Box>
                    <Box className={"burak-box"}><img src={"/img/doner.webp"} alt="Safood Logo" /></Box>
                   
                   
                </Stack>
             </div>

             <div className={"address"}>
                  <Container>
                    <Stack className={"address-area"}>
                        <Box className={"title"}>Our address</Box>
                        <iframe
                        style={{marginTop: "60"}}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4304.009129507858!2d72.35687446020327!3d40.76280806409186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcedb3adddd9f3%3A0xa6dbbc6cd1305025!2sLazeez!5e0!3m2!1sru!2skr!4v1763290728575!5m2!1sru!2skr"
                        width="1320"
                        height="500"
                        referrerPolicy="no-referrer-when-downgrade"
                        >

                        </iframe>
                    </Stack>
                  </Container>
             </div>


        </div>

       
    );
}





