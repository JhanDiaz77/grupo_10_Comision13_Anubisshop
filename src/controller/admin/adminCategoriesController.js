const fs = require('fs');
const path = require('path');

const categoriesFilePath = path.join(__dirname, '../../data/categories.json');
const categories = JSON.parse(fs.readFileSync(categoriesFilePath, 'utf-8'));
const writeCategories = (data) =>  fs.writeFileSync(categoriesFilePath, JSON.stringify(data), "utf-8");

module.exports={
    categoryList: (req, res) => {
        res.render('admin/categories/listCategory', {
            categorias :categories
        })
    },
    /* Envia la vista de formulario de creación de categorias */
    categoryAdd: (req, res) => {
        res.render('admin/categories/addCategory')/* , { titulo: "Agregar categoría"} */
    },
    createCategory: (req ,res)  => {
        let lastId = 0;
        categories.forEach(category => {
             if(category.id > lastId){
                  lastId = category.id
             }
        });

        let newCategory = {
          ...req.body,
          id: lastId + 1
      }

        categories.push(newCategory);

        writeCategories(categories);

      /* res.send('El producto a sido creado exitosamente.') */
      res.redirect('/admin/categorias/lista')
    },
    categoryEdit: (req, res)=>{
        let idCategory = +req.params.id;

        let categoria = categories.find( categoria => categoria.id === idCategory)

        res.render('admin/categories/editCategory', {categoria})
    },
    categoryUpdate: (req, res) => {
        let categoryId = +req.params.id;
        
        categories.forEach(categoria => {
          if(categoria.id === categoryId){
            categoria.name = req.body.name
          }
        });
  
        writeCategories(categories);
  
        res.redirect('/admin/categorias/lista');
      },
    categoryDelete: (req,res)  => {
        let categoryId = +req.params.id;
        let categoryToDelete;

        categories.forEach(category => {
             if(category.id === categoryId){
                  categoryToDelete = category.name
                  let categoryToDeleteIndex = categories.indexOf(category);
                  categories.splice(categoryToDeleteIndex, 1);
             }
        });
        
        writeCategories(categories)

        res.redirect('/admin/categorias/lista')
  },
}