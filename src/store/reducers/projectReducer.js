const initState = {
    prProjects:[
        {id:'1',title: 'Best Beaches in Thailand', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui doloribus nemo corrupti voluptatem, assumenda eaque! Saepe inventore, vel officia atque magni beatae itaque recusandae repellat! Officia illum iste voluptas.'},
        {id:'2',title: 'Best food to try in Thailand', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui doloribus nemo corrupti voluptatem, assumenda eaque! Saepe inventore, vel officia atque magni beatae itaque recusandae repellat! Officia illum iste voluptas.'},
        {id:'3',title: 'Best shopping places in Thailand', content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit qui doloribus nemo corrupti voluptatem, assumenda eaque! Saepe inventore, vel officia atque magni beatae itaque recusandae repellat! Officia illum iste voluptas.'}
    ]
}

const projectReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log(action.payload)
    }
    return state
}
export default projectReducer;