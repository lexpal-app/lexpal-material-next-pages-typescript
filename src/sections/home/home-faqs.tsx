import type { FC } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '@untitled-ui/icons-react/build/esm/ChevronDown';
import ChevronRightIcon from '@untitled-ui/icons-react/build/esm/ChevronRight';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';

interface FaqType {
  question: string;
  answer: string;
}

const faqs: FaqType[] = [
  {
    question: 'What is LexPal?',
    answer:
      'LexPal is an AI-driven platform for language learners offering free conversation practice. It matches learners for live sessions based on their background and availability. With integrated HD video chat, real-time text collaboration, and peer feedback, LexPal streamlines matching, scheduling, and content delivery.',
  },
  {
    question: 'How many projects can I build with Devias Kit PRO?',
    answer:
      "LexPal offers a free version accessible to all users. Additionally, we provide a premium subscription option, offering enhanced content and learning opportunities for those seeking deeper engagement.",
  },
  {
    question: 'How does LexPal ensure the quality of practice sessions?',
    answer:
      "Overall, LexPal's commitment to optimizing the matching process, facilitating constructive feedback, monitoring interactions, and integrating valuable resources contributes to the quality and effectiveness of practice sessions for language learners.",
  },
  {
    question: 'Why not go with any tandem partner?',
    answer:
      "While tandem partners are valuable, not everyone is an ideal match. Many conversation exchange apps result in unproductive experiences due to mismatched expectations. Some learners pursue language acquisition as a hobby, while others aim to navigate various life transitions or excel in academic pursuits. LexPal emphasizes quality over quantity, prioritizing optimal matches based on your learning goals, saving you time and enabling focused learning experiences.",
  },
  {
    question: 'Why not talk to AI?',
    answer:
      'While AI offers valuable support, human interaction remains essential for mastering regional dialects, informal phrases, humor, and slang—the nuances of native fluency. LexPal emphasizes human-to-human practice, mirroring real-life language scenarios. Our AI complements this approach, enriching the learning journey.',
  },
];

interface FaqProps {
  answer: string;
  question: string;
}

const Faq: FC<FaqProps> = (props) => {
  const { answer, question } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <Stack
      onClick={() => setIsExpanded((prevState) => !prevState)}
      spacing={2}
      sx={{ cursor: 'pointer' }}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
      >
        <Typography variant="subtitle1">{question}</Typography>
        <SvgIcon>{isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}</SvgIcon>
      </Stack>
      <Collapse in={isExpanded}>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {answer}
        </Typography>
      </Collapse>
    </Stack>
  );
};

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export const HomeFaqs: FC = () => {
  return (
    <Box sx={{ py: '120px' }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
        >
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={2}>
              <Typography variant="h3">Everything you need to know</Typography>
              <Typography
                color="text.secondary"
                variant="subtitle2"
              >
                Frequently asked questions
              </Typography>
            </Stack>
          </Grid>
          <Grid
            xs={12}
            md={6}
          >
            <Stack spacing={4}>
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  {...faq}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
