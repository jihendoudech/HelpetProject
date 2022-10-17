import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            Name: "",
            Breed: "",
            age: "",
            Sex: "",
            image: "",
            address:"",
            vaccinated: false,

        }
    )
    console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                onChange={handleChange}
                name="Name"
                value={formData.Name}
            />
            <br />
            <input
                type="text"
                placeholder="Breed"
                onChange={handleChange}
                name="Breed"
                value={formData.Breed}
            />
            <br />
            <input
                type="number"
                placeholder="age"
                onChange={handleChange}
                name="age"
                value={formData.age}
            />
            <br />
            <legend>What is their sex?</legend>
            <input
                type="radio"
                id="male"
                name="sex"
                value="male"
                checked={formData.sex === "male"}
                onChange={handleChange}
            />
            <label htmlFor="male">male</label>
            <input
                type="radio"
                id="female"
                name="sex"
                value="female"
                checked={formData.sex === "female"}
                onChange={handleChange}
            />
            <label htmlFor="female">female</label>
            <br />
            <input
                type="text"
                placeholder="address"
                onChange={handleChange}
                name="address"
                value={formData.address}
            />
            <br />
            <input
                type="text"
                placeholder="upload an image"
                onChange={handleChange}
                name="image"
                value={formData.image}
            />
            <br />
            <button>Submit</button>
        </form>
    )
}
