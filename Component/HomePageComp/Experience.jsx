import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import LinearProgress from '@mui/material/LinearProgress';

const experiences = [
  {
    title: 'Junior Software Developer',
    company: 'TARITAS, Jabalpur',
    period: 'Nov 2022 – Jul 2023',
    responsibilities: [
      'Developed responsive web apps and integrated APIs using Swagger',
      'Streamlined cross-platform development with Xamarin, .NET, and .NET MAUI',
      'Collaborated with cross-functional teams to define project requirements and deliver solutions on time',
    ],
    achievements: [
      'Enhanced app functionality and reduced software bugs through effective API integration and code reviews',
      'Improved user interface consistency and performance across platforms through rigorous testing and optimization',
    ],
    progress: {
      webDevelopment: 70, // Progress percentage for Web Development
      mobileDevelopment: 50, // Progress percentage for Mobile Development
    },
  },
  {
    title: 'Associate Software Engineer',
    company: 'QUARKIFI, Bangalore',
    period: 'Jan 2024 – Jul 2024',
    responsibilities: [
      'Developed and maintained web applications using HTML, CSS, JavaScript, and React.js',
      'Ensured smooth deployment and monitoring',
      'Integrated RESTful APIs for enhanced functionality',
    ],
    achievements: [
      'Significantly improved user experience and application performance',
      'Optimized system operations and enhanced application functionality through effective API integration and continuous monitoring',
    ],
    progress: {
      webDevelopment: 90, // Progress percentage for Web Development
      mobileDevelopment: 0, // No progress in Mobile Development
    },
  },
];

export default function Experience() {
  return (
    <Container
      id="experience"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          My Work Experience
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here’s a summary of my professional journey, showcasing my roles and contributions in previous positions.
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="stretch" justifyContent="center">
        {experiences.map((experience) => (
          <Grid
            item
            key={experience.title}
            xs={12}
            sm={6}
            md={4}
          >
            <Card
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: '100%', // Ensures the card takes full height of the grid item
                gap: 4,
              }}
            >
              <CardContent
                sx={{
                  flex: '1 0 auto', // Allows the content to expand and push the progress bar to the bottom
                }}
              >
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography component="h3" variant="h6">
                    {experience.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {experience.company} • {experience.period}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: 2,
                  }}
                >
                  <Typography variant="subtitle1" color="text.primary">
                    Responsibilities:
                  </Typography>
                  {experience.responsibilities.map((responsibility) => (
                    <Box
                      key={responsibility}
                      sx={{
                        py: 1,
                        display: 'flex',
                        gap: 1.5,
                        alignItems: 'center',
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                        }}
                      />
                      <Typography
                        component="text"
                        variant="body2"
                      >
                        {responsibility}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  sx={{
                    mt: 2,
                  }}
                >
                  <Typography variant="subtitle1" color="text.primary">
                    Achievements:
                  </Typography>
                  {experience.achievements.map((achievement) => (
                    <Box
                      key={achievement}
                      sx={{
                        py: 1,
                        display: 'flex',
                        gap: 1.5,
                        alignItems: 'center',
                      }}
                    >
                      <CheckCircleRoundedIcon
                        sx={{
                          width: 20,
                        }}
                      />
                      <Typography
                        component="text"
                        variant="body2"
                      >
                        {achievement}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
              <Box
                sx={{
                  mt: 'auto', // Pushes the progress bar to the bottom of the card
                }}
              >
                <Typography variant="subtitle1" color="text.primary" sx={{ mb: 1 }}>
                  Web Development
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={experience.progress.webDevelopment}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgba(0, 0, 0, 0.12)',
                    mb: 2,
                  }}
                />
                {experience.progress.mobileDevelopment > 0 && (
                  <>
                    <Typography variant="subtitle1" color="text.primary" sx={{ mb: 1 }}>
                      Mobile Development
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={experience.progress.mobileDevelopment}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: 'rgba(0, 0, 0, 0.12)',
                      }}
                    />
                  </>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
