import { Request, Response } from "express";
import prisma from "../../config/prisma";

const getAllData = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in getAllData: ${error}`,
    });
  }
};

const createData = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;

    const newObj = {
      name,
      age,
    };

    const data = await prisma.user.create({
      data: newObj,
    });

    res.status(200).json({
      succcess: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: `Error in createData: ${error}`,
    });
  }
};

// const updateData = (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { name, age } = req.body;
//     const index = data.findIndex((item: any) => item.id === Number(id));

//     if (index === -1) {
//       return res.status(404).json({
//         success: false,
//         message: `Data with id ${id} not found`,
//       });
//     }

//     if (name) {
//       data[index].name = name;
//     }

//     if (age) {
//       data[index].age = age;
//     }

//     res.status(200).json({
//       success: true,
//       data: data[index],
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       error: `Error in updateData: ${error}`,
//     });
//   }
// };

const deleteData = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return res.status(200).json({
      success: true,
      message: "Data deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: `Error in deleteData: ${error}`,
    });
  }
};

export default {
  getAllData,
  createData,
  // updateData,
  deleteData,
};
