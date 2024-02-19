import React, { useState } from 'react';

function App() {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(prevState => !prevState);
    };

    return (
        <div>
            {isVisible && (
                <p id="my-paragraph">This is the paragraph you can toggle.</p>
            )}

            <button id="toggle-btn" onClick={toggleVisibility}>
                Toggle Paragraph
            </button>
        </div>
    );
}

export default App;
