import express from "express";
import Item from "../models/itemModel.mjs";
import filterItems from "../middleware/filterItems.mjs";
import sortItems from "../middleware/sortItems.mjs";
import paginateItems from "../middleware/paginateItems.mjs";

const router = express.Router();

// ➤ Create item (POST)
router.post("/", async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.json({ message: "Item added", item });
    } catch (error) {
        res.status(500).json({ message: "Insert error", error });
    }
});

// ➤ Get items (FILTER + SORT + PAGINATION)
router.get("/", filterItems, sortItems, paginateItems, async (req, res) => {
    try {
        const items = await Item.find(req.filter)
            .sort(req.sortOption)
            .skip(req.pagination.skip)
            .limit(req.pagination.limit);

        const total = await Item.countDocuments(req.filter);

        res.json({
            totalItems: total,
            currentPage: req.pagination.pageNumber,
            totalPages: Math.ceil(total / req.pagination.limit),
            data: items
        });
    } catch (error) {
        res.status(500).json({ message: "Fetching items failed", error });
    }
});

export default router;
