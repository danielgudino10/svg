const { exec } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('Enter up to three characters for the text: ', (text) => {
    rl.question('Enter the text color (color keyword or hexadecimal number): ', (textColor) => {
      const shapeOptions = ['circle', 'triangle', 'square'];
      rl.question(`Choose a shape (${shapeOptions.join(', ')}): `, (shape) => {
        rl.question(`Enter the shape color (color keyword or hexadecimal number) for ${shape}: `, (shapeColor) => {
        
          if (!text || !textColor || !shape || !shapeColor) {
            console.error('All Inputs are required.');
            rl.close();
            return;
          }

          
          const pythonScriptPath = 'scripts/generate_svg.py';
          const command = `python ${pythonScriptPath} ${text} ${textColor} ${shape} ${shapeColor} --output_dir=./`;

          exec(command, (error, stdout, stderr) => {
            if (error) {
              console.error(`Error executing Python script: ${stderr}`);
              rl.close();
              return;
            }

            console.log('Generated logo.svg');

          
            exec('xdg-open logo.svg', (error, stdout, stderr) => {
              if (error) {
                console.error(`Error opening SVG file: ${stderr}`);
              }
              rl.close();
            });
          });
        });
      });
    });
  });
}


promptUser();
