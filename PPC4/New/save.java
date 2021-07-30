import org.jdom.*;
import org.jdom.input.*;
import org.jdom.output.*;
import java.io.IOException;
import java.io.*;
  
public class WritingToXML 
{
    public WritingToXML() 
    {
      SAXBuilder builder = new SAXBuilder();
      Document myDocument = null;
      Element rootElement = null;      
      String path = "c:/test.xml";
       

try{          
        rootElement = new Element("Books");
        myDocument = new Document(rootElement);
         
        Element bookElement;
          for(int i=1;i<6;i++)
          {
          bookElement = new Element("A");
          bookElement.addContent(new Element("B").addContent("AAAAAA"+i));
          bookElement.addContent(new Element("C").addContent("asdf"));
          bookElement.addContent(new Element("D").addContent("78"));
  
          // Add book tag to Root tag Books
          rootElement.addContent(bookElement);
          }          
          
        XMLOutputter outputter = new XMLOutputter("     ",true);
        outputter.output(myDocument, System.out);
        System.out.println("Saving file.......");
        outputter.output(myDocument,new FileOutputStream(path));                
        }
       catch(IOException e){e.printStackTrace();}
  }
  public static void main(String args[])
  {
   new WritingToXML();
  }
}