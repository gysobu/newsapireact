import React from 'react';
import PropTypes from 'prop-types';

class Sources extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var sourceItems=this.props.sourcelist.map((element)=>{
            
            return <li>
                    {element.name}</li>
            
                  
        })
        
        
        return ( <div>
            {sourceItems}
           
            </div>
        );
    }
}


Sources.propTypes = {
    
};

export default Sources
