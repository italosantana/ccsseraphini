import { Public_metrics } from '../tweetTypes';

const isPublicMetricsChanged = (
  publicMetrics: Public_metrics,
  publicMetricsToCompare: Public_metrics,
): boolean => {
  const keys = ['retweet_count', 'reply_count', 'like_count', 'quote_count'];

  for (const key of keys) {
    if (publicMetrics[key] !== publicMetricsToCompare[key]) {
      return true;
    }
  }

  return false;
};

export default isPublicMetricsChanged;
