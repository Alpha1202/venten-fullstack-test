import React, { useContext } from 'react';
import Title from '../components/Title';
import { ProductContext } from '../Context';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';


const AddProduct = ({ history, values, setValues, setSubmitting, errors, touched, isSubmitting, handleReset }) => {
	const context = useContext(ProductContext);
	const { addProduct, loading, redirect, product } = context;

	const addNewProduct = async ({ name, price, description, imageUrl, color, category }) => {
		console.log(imageUrl);
		const productData = new FormData();
		productData.set('name', name);
		productData.set('description', description);
		productData.set('price', price);
		productData.set('catId', category);
		productData.set('color', color);
		productData.append('image', imageUrl[0]);
        addProduct(productData);
        
	};
	return (
		<div style={{ padding: '30px 25%' }}>
			<Title title="Add Product" />
			<Form>
				<div className="form-group">
					<label>Name</label>
					{touched.name && errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
					<Field
						type="text"
						name="name"
						className={touched.name && errors.name ? 'form-control form-error' : 'form-control'}
						placeholder="Product name is required"
					/>
				</div>
				<div className="form-group">
					<label>Price</label>
					{touched.price && errors.price && <p style={{ color: 'red' }}>{errors.price}</p>}
					<Field
						name="price"
						type="number"
						className={touched.price && errors.price ? 'form-control form-error' : 'form-control'}
						placeholder="Product price is required"
					/>
				</div>
				<div className="form-group">
					<label>Color</label>
					{touched.color && errors.color && <p style={{ color: 'red' }}>{errors.color}</p>}
					<Field
						name="color"
						type="text"
						className={touched.color && errors.color ? 'form-control form-error' : 'form-control'}
						placeholder="Color variant is required"
					/>
				</div>
				<div className="form-group">
					<label>Category</label>
					<Field className="form-control" component="select" name="category">
						<option value={1}>Computers</option>
						<option value={2}>Home Utilities</option>
						<option value={3}>Sports</option>
						<option value={4}>Phones and Accessories</option>
						<option value={5}>Electronics</option>
						<option value={6}>Clothing and Fashion</option>
						<option value={7}>Others</option>
					</Field>
				</div>
				<div className="form-group">
					<label>Description</label>
					{touched.description && errors.description && <p style={{ color: 'red' }}>{errors.description}</p>}
					<Field
						component="textarea"
						name="description"
						type="textarea"
						className={
							touched.description && errors.description ? (
								'form-control textarea form-error'
							) : (
								'form-control textarea'
							)
						}
						placeholder="Info about this product is required"
					/>
				</div>
				<div className="form-group">
					<label>Upload Image</label>
					{touched.imageUrl && errors.imageUrl && <p style={{ color: 'red' }}>{errors.imageUrl}</p>}
					<input
						name="imageUrl"
						type="file"
						className={touched.imageUrl && errors.imageUrl ? 'form-control form-error' : 'form-control'}
						onChange={(event) =>
							setValues({ ...values, [event.currentTarget.name]: event.currentTarget.files })}
					/>
				</div>
				<div style={{ margin: '2em' }} />
				<input
                    onClick={() => {addNewProduct(values)}}
					disabled={isSubmitting}
					type="submit"
					value={loading ? 'Loading...' : 'Add'}
					className="btn btn-primary"
				/>
				<input
					onClick={() => {
						handleReset();
					}}
					value="Cancel"
					className="btn btn-secondary"
				/>
			</Form>
            { redirect && history.push(`/product/${product.id}`)}
		</div>
        
    );
    
};

const FILE_SIZE = 10485760;
const SUPPORTED_FORMATS = [ 'image/jpg', 'image/jpeg', 'image/png' ];
const ProductForm = withFormik({
	mapPropsToValues() {
		return {
			name: '',
			description: '',
			price: '',
			imageUrl: '',
			color: '',
			category: 7
		};
	},
	validationSchema: Yup.object().shape({
		name: Yup.string().required('Provide Product name').min(2),
		description: Yup.string().required('Provide Product Description').min(150),
		price: Yup.number().required('Provide Product price').positive(),
		color: Yup.string().required('Specify Product color variant').min(4),
		imageUrl: Yup.mixed()
			.required('Upload Product Image')
			.test('fileType', 'Unsupported File Format', (value) => SUPPORTED_FORMATS.includes(value[0].type))
			.test('fileSize', 'File too large, must be less than 10MB', (value) => value[0].size <= FILE_SIZE)
	}),
	handleSubmit(values, { resetForm }) {
		resetForm();
	}
})(AddProduct);

export default ProductForm;
