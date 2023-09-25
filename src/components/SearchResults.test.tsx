import { render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults";


const data = [
    { name: 'John', Alburm: 'Alburm', Video: 'Video' },
    { name: 'Jane', Alburm: 'Alburm', Video: 'Video' },
  ];

test('renders the table header', () => {
    render(<SearchResults  />);
    const nameHeader = screen.getByText('Name');
    const alburmHeader = screen.getByText('Alburm');
    const videoClipHeader = screen.getByText('Video');
    
    expect(nameHeader).toBeInTheDocument();
    expect(alburmHeader).toBeInTheDocument();
    expect(videoClipHeader).toBeInTheDocument();
});

test('renders the table rows with data', () => {
    render(<SearchResults />);
    
    data.forEach((item) => {
      const nameCell = screen.getByText(item.name.toString());
      const alburmCell = screen.getByText(item.Alburm);
      const videoClipCell = screen.getByText(item.Video.toString());
  
      expect(nameCell).toBeInTheDocument();
      expect(alburmCell).toBeInTheDocument();
      expect(videoClipCell).toBeInTheDocument();
    });
});