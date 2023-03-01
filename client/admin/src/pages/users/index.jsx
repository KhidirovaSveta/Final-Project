import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect } from "react";
import { deleteData, getData } from "../../redux/slice/getProductsSlice";
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
import SideBar from "../../components/sideBar";

const Users = () => {
  const product = useSelector((state) => state.getDataReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <div>
      <SideBar />

      <TableContainer>
        <Table variant="striped" colorScheme="gray">
          <TableCaption> Sweeties products</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {product?.data?.map((product) => {
              return (
                <>
                  <Tr>
                    <Td>{product.name}</Td>

                    <Td>
                      <FaRegTrashAlt
                        className="removeBtn btn"
                        onClick={() =>
                          dispatch(deleteData(product._id)).then(() =>
                            dispatch(getData())
                          )
                        }
                      />
                    </Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Users;
