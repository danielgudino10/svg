import argparse
import svgwrite
import os

def calculate_text_position(shape):
    """
    Calculate the appropriate position for the text based on the shape.
    """
    if shape == 'circle':
        return (150, 100)  # Center for circle
    elif shape == 'triangle':
        return (150, 100)  # Center for triangle
    elif shape == 'square':
        return (150, 100)  # Center for square
    else:
        return (150, 150)  # Default

def generate_logo(text, text_color, shape, shape_color, output_dir):
    # Create an SVG drawing with dimensions 300x200
    dwg = svgwrite.Drawing(os.path.join(output_dir, 'logo.svg'), size=('300px', '200px'))

    # Set the position for the text based on the shape
    text_position = calculate_text_position(shape)

    if shape == 'circle':
        # Assuming radius of 50 for the circle
        shape_element = dwg.circle(center=(150, 100), r=50, fill=shape_color)
    elif shape == 'triangle':
        # Assuming triangle points for a 100x100 equilateral triangle
        shape_element = dwg.polygon(points=[(150, 50), (250, 150), (50, 150)], fill=shape_color)
    elif shape == 'square':
        # Assuming a square with side length of 100
        shape_element = dwg.rect(insert=(100, 50), size=(100, 100), fill=shape_color)
    else:
        print('Invalid shape input.')
        return

    # Add the shape to the SVG drawing
    dwg.add(shape_element)

    # Add text at the specified position
    dwg.add(dwg.text(text, insert=text_position, fill=text_color, text_anchor="middle"))

    # Save the SVG file
    dwg.save()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Generate SVG logo")
    parser.add_argument("text", type=str, help="Text for the logo")
    parser.add_argument("text_color", type=str, help="Text color")
    parser.add_argument("shape", type=str, choices=["circle", "triangle", "square"], help="Shape of the logo")
    parser.add_argument("shape_color", type=str, help="Shape color")
    parser.add_argument("--output_dir", type=str, default=".", help="Output directory for the SVG file")

    args = parser.parse_args()

    generate_logo(args.text, args.text_color, args.shape, args.shape_color, args.output_dir)
