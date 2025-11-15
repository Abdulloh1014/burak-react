import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";




const products = [
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Lavash", imagePath: "/img/lavash.webp" },
    { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
    { productName: "Kebab", imagePath: "/img/kebab.webp" },
    { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
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
                                    height: "height: 36,",
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
                                products.map((product, index) => {
                                    return (
                                        <Stack key={index} className={"product-card"}>
                                            <Stack 
                                            className={"product-img"}
                                            sx={{ backgroundImage: `url(${product.imagePath})`,  }}
                                            >
                                            
                                            <div className={"product-sale"}>Normal size</div>
                                            <Button>
                                                <img 
                                                className="shopping-icon"
                                                src={"/icons/shopping-cart.svg"} 
                                                style={{ display: "flex"}} 
                                                />
                                            </Button>
                                            <Button className={"view-btn"} sx={{right: "36px"}}>
                                                <Badge badgeContent={20} color="secondary">
                                                    <RemoveRedEyeIcon
                                                    sx={{color: 20 ? "gray" : "white", }}
                                                      />
                                                </Badge>
                                                
                                            </Button>

                                            </Stack> 
                                            <Box>
                                                <span className={"product-title"}>
                                                    {product.productName}
                                                </span>

                                                <Box className={"narx"}>
                                                     <div>
                                                    <MonetizationOnIcon sx={{ color: "#d7b686" }} />
                                                        
                                                </div>
                                                <div className={"sena"}>  {12}</div>

                                                </Box>

                                               
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
                                next: ArrowBackIcon,
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
                    <Box className={"burak-box"}><img src={"/img/seafood.webp"} alt="Safood Logo" /></Box>
                    <Box className={"burak-box"}><img src={"/img/seafood.webp"} alt="Safood Logo" /></Box>
                    <Box className={"burak-box"}><img src={"/img/seafood.webp"} alt="Safood Logo" /></Box>
                    <Box className={"burak-box"}><img src={"/img/seafood.webp"} alt="Safood Logo" /></Box>
                   
                   
                </Stack>
             </div>


        </div>

       

    );
}
