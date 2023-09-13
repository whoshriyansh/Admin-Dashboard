import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            what is your name and what is your Occupation?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            My name is Shriyansh Lohia and I'm a Frontend Enginner.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            what is your specialization?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I don't have any It Background but I know in depth JS and React
            cincept and also Working on my backend Knowledge.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Are you a Full stack Developer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, I know backend tecnologies but It would not be a good Idea to
            call myself as a Backend Enginner as I'm currently learning and I'll
            be full stack developer in 2 or 3 months max.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What is your Expected salary?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            with all due respect , I think your who are reading this is in the
            main position to give answer to that question but after taking and
            Interview.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I love Anime and Code and it is a Super power for me to code and I'm
            working to be a Better Developer every Single Day.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
