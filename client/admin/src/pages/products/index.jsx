import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../redux/slice/getProductsSlice";
import "./index.scss";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import AddProductFormik from "../../components/addProduct";
import { FaRegTrashAlt } from "react-icons/fa";
import { VscEdit } from "react-icons/vsc";

import SideBar from "../../components/sideBar";

const AllProducts = () => {
  const product = useSelector((state) => state.getDataReducer);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div id="table">
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddProductFormik />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="gray" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>

      <SideBar />

      <div className="productTable">
        <div className="action-buttons">
          <Button colorScheme="black" variant="outline" onClick={onOpen}>
            {" "}
            Add product{" "}
          </Button>
        </div>

        <TableContainer>
          <Table variant="striped" colorScheme="gray">
            <TableCaption> Sweeties products</TableCaption>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Name</Th>
                <Th isNumeric>Price</Th>
                <Th> Brand </Th>
              </Tr>
            </Thead>
            <Tbody>
              {product?.data?.map((product) => {
                return (
                  <>
                    <Tr>
                      <Td>
                        <img src={product.image1} alt="" width={"120"} />
                      </Td>
                      <Td>{product.name}</Td>
                      <Td isNumeric>{product.price}.00</Td>
                      <Td>{product.brand}</Td>

                      <Td>
                        <FaRegTrashAlt
                          onClick={() =>
                            dispatch(deleteData(product._id)).then(() =>
                              dispatch(getData())
                            )
                          }
                        />
                      </Td>
                      <Td>
                        <Button>
                          <VscEdit />
                        </Button>
                      </Td>
                    </Tr>
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default AllProducts;
