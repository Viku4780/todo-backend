import { Todo } from "../models/todo.model.js";
import { validate } from "../middleware/validate.js";
import { Router } from "express";
import { todoSchema } from "../validation/todo.schema.js";


const router  = Router();

// create
router.post('/',validate(todoSchema), async (req ,res ,next) => {
    try{
        const todo = await Todo.create({
            todo: req.body.todo,
        });

        res.json({message: 'todo created',todo});
    }catch(err){
        next(err);
    }
});

// get all todo
router.get('/',async (req,res,next) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(err){
        next(err);
    }
});

// update
router.put('/:id',async (req,res,next) => {
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({message: 'todo updated',todo});
    }catch(err){
        next(err);
    }
});

// delete 
router.delete('/:id',async (req,res,next) => {
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.json({message: "todo deleted"});
    } catch(err){
        next(err);
    }
});

export default router;